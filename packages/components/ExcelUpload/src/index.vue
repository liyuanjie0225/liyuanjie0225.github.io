<template>
  <a-drawer
    class="excel-upload-drawer"
    title="导入"
    :width="520"
    :visible="visible"
    @close="$emit('onClose')"
    destroy-on-close
  >
    <div class="download-template">
      <div class="title">下载导入模板，根据模板提示完善内容</div>
      <a-button @click="downloadTemplate">
        下载模板
        <a-icon type="cloud-download" />
      </a-button>
    </div>

    <div class="upload-excel">
      <div class="title">上传完善好的内容</div>
      <div class="content">
        <a-upload-dragger
          v-show="!showUploading"
          name="file"
          :before-upload="beforeUpload"
          :file-list="[]"
          :accept="fileTypes.join(',')"
        >
          <p class="ant-upload-drag-icon">
            <img class="block-item" :src="uploadImg" width="48" height="48" />
          </p>
          <p style="font-weight: bold">点击或者拖拽上传完善好的内容到这里</p>
        </a-upload-dragger>
        <div v-show="showUploading">
          <div class="filename">文件名称：{{ filename }}</div>
          <div class="progress">
            <a-progress
              :percent="progressNum"
              :status="progressStatus"
              :show-info="false"
            />
            <a-tag
              :color="fileStatus === '上传成功' ? '#D9F0ED' : '#FFEDC9'"
              :style="{
                color: fileStatus === '上传成功' ? '#007F70' : '#ff7100',
              }"
            >
              {{ fileStatus }}
            </a-tag>
          </div>
        </div>
      </div>
      <div class="footer">
        <a-button @click="onClose" :disabled="uploadLoading">
          {{ showUploading ? "返回" : "取消" }}
        </a-button>
        <a-button
          v-show="showUploading"
          style="margin-left: 10%"
          type="primary"
          :disabled="fileList.length === 0"
          :loading="uploadLoading"
          @click="handleUpload"
        >
          导入
        </a-button>
      </div>
    </div>

    <div
      class="download-err-file"
      v-show="
        ['上传失败', '上传成功'].includes(fileStatus) &&
        showUploading &&
        errFile
      "
    >
      <template v-if="fileStatus === '上传失败'">
        <div class="info" style="color: #ff7100">
          <a-icon type="exclamation-circle" />&nbsp;导入失败
        </div>
        <div class="file">
          查看导入失败原因,请点击<a target="_blank" style="color: #2c5fdb"
            >下载失败文件</a
          >
        </div>
      </template>
      <template v-else>
        <div class="info"><a-icon type="check-circle" />&nbsp;导入成功</div>
        <div class="file">
          查看详情,请点击<a target="_blank" style="color: #2c5fdb">下载文件</a>
        </div>
      </template>
    </div>
  </a-drawer>
</template>

<script>
import uploadImg from "./assets/upload.png";
function dataUrlToFile(dataUrl, fileName = "file") {
  const arr = dataUrl.split(",");
  const str = arr[0];
  const ext = str.substring(str.indexOf("/") + 1, str.indexOf(";"));
  const mine = arr[0].match(/:(.*?);/)[1];
  const bytes = atob(arr[1]); // 转换为byte
  let n = bytes.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bytes.charCodeAt(n);
  }
  const blob = new Blob([u8arr], { type: mine });
  return new File([blob], `${fileName}.${ext}`, { type: mine });
}
export default {
  name: "ExcelUpload",
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    limitSize: {
      // 限制上传的excel的大小
      type: Number,
      default: 10,
    },
    uploadResult: {
      // 上传结果，失败还是成功
      type: [Boolean, null],
    },
    errFile: {
      type: String,
      default: "",
    }, // 上传失败，后端返回记录的base文件
    templateFile: null, // 任何类型都可以
  },

  data() {
    return {
      fileTypes: [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
      ], // 限制上传文件的格式
      showUploading: false, // 是否处于上传页面
      uploadLoading: false, // 是否正在上传
      filename: "",
      progressNum: 0,
      progressStatus: "normal",
      uploadImg,
      fileStatus: "等待上传",
      fileList: [], // 待上传的文件
      base64Excel: "", // 待上传的excel的base64格式
      roundTime: 4, // 进度条跑满一轮的时间（秒）
      intervalTime: 100, // 定时器运行的间隔时间（毫秒）
      progressInterval: null, // 更新进度条的定时器
    };
  },

  watch: {
    visible(newVal) {
      if (newVal && this.uploadResult === true) {
        // 导入成功，返回拖拽界面
        this.showUploading = false;
      }
    },

    // 下载模板文件
    templateFile(newVal) {
      if (newVal) {
        const base64File = `data:application/octet-stream;base64,${newVal.fileContent}`;
        const blob = dataUrlToFile(base64File);
        const link = document.createElement("a"); // 创建下载元素
        link.style.display = "none";
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", newVal.fileName);
        document.body.appendChild(link);
        link.click(); // 点击下载
        link.remove(); // 下载完成移除元素
      }
    },
    uploadResult(newVal) {
      if (typeof newVal === "boolean") {
        if (newVal) {
          this.fileStatus = "上传成功";
          // 自动关闭抽屉
          this.$emit("onClose");
        } else {
          this.fileStatus = "上传失败";
        }
        // 结束进度条和加载状态
        this.updateProgress(true);
        this.uploadLoading = false;
        if (this.errFile) {
          // 下载错误记录文件
          const base64File = `data:application/octet-stream;base64,${this.errFile}`;
          const blob = dataUrlToFile(base64File);
          const link = document.querySelector(".download-err-file a");
          link.download = "上传错误记录.xls";
          link.href = window.URL.createObjectURL(blob);
        }
      }
    },
  },

  methods: {
    // 下载模板
    downloadTemplate() {
      this.$emit("downloadTemplate");
    },

    // 上传前判断
    beforeUpload(file) {
      const isExcel = this.fileTypes.includes(file.type);
      if (!isExcel) {
        this.$message.error("文件必须是xls/xlsx格式");
      }
      const isLt10M = file.size / 1024 / 1024 < this.limitSize;
      if (!isLt10M) {
        this.$message.error(`文件大小必须小于${this.limitSize}MB`);
      }
      if (isExcel && isLt10M) {
        this.showUploading = true;
        this.fileStatus = "准备上传";
        // 初始进度条
        this.progressNum = 0;
        this.progressStatus = "active";
        this.filename = file.name;
        this.fileList = [file];
        // 将excel转为base64保存
        // 因为在业务中先选中要上传的 excel，然后再回到 excel 文件夹打开该文件，修改该文件然后保存，回到页面中点击上传
        // 此时文件修改内容后file的本地文件已经丢失，再点击导入会报错net::ERR_UPLOAD_FILE_CHANGED
        // 所以上传前将file转成base64（base64与本地的文件状态已经无关了），上传时再转成file
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
          this.base64Excel = e.target.result;
        };
      }
      return false;
    },

    // 点击“导入”按钮
    handleUpload() {
      // 初始进度条
      this.progressNum = 0;
      this.uploadLoading = true;
      this.fileStatus = "正在上传";
      this.updateProgress();
      // this.$emit('uploadExcel', this.fileList[0])
      // 将base64的excel再转为file
      const file = dataUrlToFile(this.base64Excel);
      this.$emit("uploadExcel", file);
    },

    // 处理进度条
    updateProgress(isFinished) {
      if (isFinished) {
        if (this.fileStatus === "上传成功") {
          this.progressNum = 100;
          this.progressStatus = "normal";
        } else if (this.fileStatus === "上传失败") {
          this.progressNum = 0;
          this.progressStatus = "exception";
        }
        clearInterval(this.progressInterval);
        return;
      }

      if (!this.progressInterval) {
        // 开启定时器
        this.progressInterval = setInterval(() => {
          this.updateProgress();
        }, this.intervalTime);
      }

      // 更新进度条
      // let newValue = 0
      // if (this.progressNum < 80) {
      //   newValue = Math.random() * 5 + 1
      // } else if (this.progressNum < 96) {
      //   newValue = (100 - this.progressNum) / 10
      // }
      // this.progressNum = Number((this.progressNum + Math.floor(newValue * 10) / 10).toFixed(2))

      const newValue =
        this.progressNum + 100 / this.roundTime / (1000 / this.intervalTime);
      this.progressNum = newValue > 100 ? newValue - 100 : newValue;
    },

    onClose() {
      if (this.showUploading) {
        // 导入页面需要返回到拖拽文件页面
        this.showUploading = false;
      } else {
        this.$emit("onClose");
      }
    },
  },
};
</script>

<style scoped lang="less">
:deep(.ant-drawer-body) {
  padding: 6% 8% 0 8% !important;
}
.excel-upload-drawer {
  .download-template,
  .upload-excel,
  .download-err-file {
    border-radius: 4px;
    padding: 5%;
    background-color: #ffffff;
  }
  .download-template {
    height: 20%;
    margin-bottom: 5%;
    .title {
      margin-bottom: 5%;
    }
  }

  .upload-excel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    .content {
      height: 70%;
      :deep(.ant-upload) {
        background: #ffffff;
      }
      .filename {
        font-weight: bold;
        font-size: 16px;
      }
      .progress {
        margin: 3% 0;
        .ant-progress {
          display: inline-block;
          width: 30%;
          margin-right: 3%;
          vertical-align: text-bottom;
          :deep(.ant-progress-bg) {
            background-color: #1890ff;
          }

          :deep(.ant-progress-text) {
            color: #1890ff;
          }
        }
      }
    }
    .footer {
      text-align: center;
    }
  }
  .download-err-file {
    height: 20%;
    padding: 8%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .info {
      font-size: 16px;
    }
  }
}
</style>
