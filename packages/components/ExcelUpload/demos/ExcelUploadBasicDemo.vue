<markdown>
    # 基础示例
    </markdown>
<template>
  <div>
    <a-button @click="uploadVisible = true">打开抽屉 </a-button>
    <!-- @downloadTemplate="downloadTemplate" -->

    <excel-upload
      :visible="uploadVisible"
      :upload-result="uploadResult"
      :err-file="errFile"
      :template-file="templateFile"
      @onClose="uploadVisible = false"
      @uploadExcel="uploadExcel"
    />
  </div>
</template>

<script>
export default {
  name: "ExcelUploadBasicDemo",
  data() {
    return {
      uploadVisible: false,
      uploadResult: null, // 是否上传成功
      errFile: "", // 上传失败的错误文件
      templateFile: null, // 下载模板文件的二进制流
    };
  },
  methods: {
    // 上传Excel
    uploadExcel(file) {
      setTimeout(() => {
        this.uploadResult = false;
        this.errFile = "";
        this.$message.error("导入失败");
      }, 3000);
    },
  },
};
</script>

<style scoped></style>
