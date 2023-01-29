<template>
  <div
    class="left-card-item-container"
    :class="{
      is_selected:feature.isSelected && checkAction('select'),
      is_disabled:feature.disabled || disabled,
      is_hover:checkAction('hover'),
      is_bind:feature.isBind,
      is_read:feature.isRead && showRead,
    }"
  >
    <slot
      name="item"
      :feature="feature"
      :db-copy="dbClickText"
    >
      <div class="left-card-item-content">
        <div class="left-card-item-content-left">
          <slot
            name="itemLeft"
            :feature="feature"
          >
            <CustomImg
                width="100%"
                height="100%"
              class="feature-image"
              :key="feature[mainImgKey]"
              :error="defaultImg"
              :main-img="feature[mainImgKey]"
              :sub-img="feature[subImgKey]"
            />
            <!--          人脸-->
            <img
              v-if="feature.facePath"
              :src="faceImage"
              style="position: absolute;width: 20px;height: 20px;top:0;right: 0"
            >
            <!--        播放按钮-->
            <i
              class="iconfont icon11bofang2 icon-play"
              v-if="checkAction('preview')"
              @click.stop="seeItem"
            />
            <!--            帧数-->
            <div
              class="sequence-frame"
              v-if="showSequenceCount && feature.totalFrame > 0"
            >
              <i class="iconfont iconxuliezhen1 label-width-gap" />
              <span>{{ feature.totalFrame }}{{ '帧' }}</span>
            </div>
          </slot>
        </div>
        <div class="left-card-item-content-right">
          <div class="left-card-item-text">
            <slot
              name="content"
              :feature="feature"
              :db-copy="dbClickText"
            >
              <div
                v-for="item in newConfig"
                :key="item.key"
                class="left-card-item-text-value"
                :class="{
                  'left-card-item-text-value-bold':item.bold
                }"
              >
                <!--                <span style='text-align: right'>-->
                <!--                  <slot :name='`${item.key}Name`' :feature='feature'>-->
                <!--                    <span class='left-card-item-text-label' :title='item.label'>{{ item.label }}:</span>-->
                <!--                  </slot>-->
                <!--                </span>-->
                <span
                  :class="item.mainClass"
                  :style="item.style || {}"
                  @dblclick.stop="($event)=>{dbClick(item,$event)}"
                >
                  <slot
                    :name="`${item.key}Value`"
                    :feature="feature"
                    :db-copy="dbClickText"
                  >
                    <a-tooltip :title="item.label">
                      <a-icon
                        v-if="item.antdIcon"
                        :type="item.antdIcon"
                        :class="item.iconClass"
                        class="item-iconfont"
                        :style="item.iconStyle || {}"
                      />
                    </a-tooltip>
                    <a-tooltip :title="item.label">
                      <i
                        v-if="item.iconfont"
                        class="iconfont item-iconfont"
                        :class="(function dynamicClass(){
                          if(item.iconClass){
                            return `${item.iconClass} ${item.iconfont}`
                          }else {
                            return `${item.iconfont}`
                          }
                        })()"
                        :style="item.iconStyle || {}"
                      />
                    </a-tooltip>
                    <span
                      style="cursor: pointer"
                      :title="getItemTitle(item)"
                      v-if="item.click"
                      @click.stop="item.click(feature)"
                      :class="item.textClass"
                      :style="item.textStyle || {}"
                    >
                      <!--                      <span v-if='item.render' v-html='item.render(feature)'></span>-->
                      <!--                      <span v-else>-->
                      <!--                        {{ feature[item.key] }}-->
                      <!--                      </span>-->
                      {{ item.render && item.render(feature) || feature[item.key] }}
                    </span>
                    <span
                      style="cursor: pointer"
                      :title="getItemTitle(item)"
                      v-else
                      :style="item.textStyle || {}"
                    >
                      {{ item.render && item.render(feature) || feature[item.key] }}
                      <!--                      {{ item.render && item.render(feature) || feature[item.key] }}-->
                    </span>
                  </slot>
                </span>
              </div>
            </slot>
          </div>
          <div class="left-card-item-action">
            <div>
              <slot
                name="actionLeft"
                :feature="feature"
              />
            </div>
            <div>
              <a-tooltip
                v-if="checkAction('preview')"
                placement="bottom"
                :title="getActionString('preview','预览')"
              >
                <i
                  class="iconfont iconchakan09 icon-button"
                  @click.stop="seeItem"
                />
              </a-tooltip>
              <a-tooltip
                v-if="checkAction('operate')"
                placement="bottom"
                :title="getActionString('operate','重置')"
              >
                <i
                  class="iconfont icon-button icon03shipinguanli-zhongti"
                  @click.stop="operateItem"
                />
              </a-tooltip>
              <a-tooltip
                v-if="checkAction('edit')"
                placement="bottom"
                :title="getActionString('edit','编辑')"
              >
                <i
                  class="iconfont iconbianji icon-button"
                  @click.stop="editItem"
                />
              </a-tooltip>
              <a-tooltip
                v-if="checkAction('confirm')"
                placement="bottom"
                :title="getActionString('confirm','追加')"
              >
                <i
                  class="iconfont icona-209mubiaojiansuo33 icon-button"
                  @click.stop="confirmItem"
                />
              </a-tooltip>
              <a-tooltip
                v-if="checkAction('alignment')"
                placement="bottom"
                :title="getActionString('alignment','比对检索')"
              >
                <i
                  class="iconfont iconvmubiaojiansuo_24 icon-button"
                  @click.stop="alignment"
                />
              </a-tooltip>
              <a-tooltip
                v-if="checkAction('info')"
                placement="bottom"
                :title="getActionString('info','显示详情')"
              >
                <i
                  class="iconfont iconanjianxiangqing-xiugai201 icon-button"
                  @click.stop="seeDetail"
                />
              </a-tooltip>
              <a-tooltip
                v-if="checkAction('repository')"
                placement="bottom"
                :title="getActionString('repository','保存到底库')"
              >
                <i
                  class="iconfont iconbaocun06 icon-button"
                  @click.stop="saveItem"
                />
              </a-tooltip>
              <a-tooltip
                v-if="checkAction('path')"
                placement="bottom"
                :title="getActionString('path','轨迹')"
              >
                <i
                  class="iconfont icona-01dituzhuizong icon-button"
                  @click.stop="pathItem"
                />
              </a-tooltip>
              <a-tooltip
                v-if="checkAction('local')"
                placement="bottom"
                :title="getActionString('local','点位')"
              >
                <i
                  class="iconfont icon207dituzhongxindian3-2 icon-button"
                  @click.stop="localItem"
                />
              </a-tooltip>
              <a-tooltip
                v-if="checkAction('delete') && (feature.privilegeLevel !== 0 && feature.privilegeLevel !== 1)"
                placement="bottom"
                :title="getActionString('delete','删除')"
              >
                <i
                  class="iconfont iconshanchu08 icon-button"
                  @click.stop="deleteItem"
                />
              </a-tooltip>
              <!--          扩展插槽-->
              <slot
                name="action"
                :feature="feature"
              />
            </div>
          </div>
        </div>
      </div>
    </slot>
    <div
      @click="selectChange"
      v-if="checkAction('select')"
      class="card-tri"
      :class="{'card-tri-selected':feature.isSelected}"
    />
    <!--          新添加-->
    <img
      v-if="feature.isNew && showNew"
      :src="new45"
      style="position: absolute;width: 40px;height: 40px;bottom:0;left: 0"
    >
    <!--          已读-->
    <img
      v-if="feature.isRead && showReadIcon"
      style="position: absolute;width: 44px;height: 44px;bottom:0;left: 0"
      src="./assets/read.png"
      alt=""
    >
    <div
      v-show="false"
      class="copy-target"
    />
  </div>
</template>

<script>
import new45 from './assets/new45.png'
import faceImage from './assets/portrait-mark.png'
import Clipboard from 'clipboard'

export default {
  name: 'LeftCardItem',
  props: {
    rowKey: {
      type: String,
      default: () => 'featureId'
    },
    mainImgKey: {
      type: String,
      default: () => ''
    },
    subImgKey: {
      type: String,
      default: () => ''
    },
    feature: {
      type: Object,
      default: () => ({})
    },
    /**
     * 目前存在的操作
     *hover      //hover
     preview    //预览
     operate    //重新检测
     select     //是否可以选择
     edit       //编辑
     confirm    //追加目标
     alignment  //比对检索
     info       //查看详情
     repository //保存底库
     local      //定位
     其他操作 插槽
     <slot >
     用法1
     {
        hover:true
     }
     用法2
     {
        hover:(feature)=>{
          //进行相应的判断
          return true
        }
     }
     * */
    action: {
      type: Object,
      default: () => ({})
    },
    /**
     * 右侧的表单配置
     *{
          label: '时间',   // 标题
          key: 'time',    // key
          click: (item) => {        //点击事件
            console.log('点击')
          },
          style:{               //特殊的样式
            color:'#b32626',
            cursor:'pointer'
          } //一个样式对象
          render:(feature)=>{  //渲染函数
            time = createTime || startTime
          }
        }
     */
    config: {
      type: Array,
      default: () => ([])
    },
    labelWidth: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: String | Number,
      default: () => 40
    },
    disabled: {
      type: Boolean,
      default: false
    },
    copyable: { // 是否允许双击拷贝
      type: Boolean,
      default: true
    },
    showSequenceCount: { // 显示帧数
      type: Boolean,
      default: true
    },
    showNew: { // 显示新增
      type: Boolean,
      default: true
    },
    showRead: { // 显示已读
      type: Boolean,
      default: false
    },
    showReadIcon: { // 显示已读图标
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      new45,
      faceImage,
      faceImg: require('./assets/portrait-mark.png'),
      defaultImg:require('./assets/perch.png'),
      newConfig: []
    }
  },
  computed: {
    // defaultImg: function () {
    //   return require('./assets/prech.png')
    // }
  },
  watch: {
    config: {
      handler: function (val, oldVal) {
        // console.log(this.config)
        this.newConfig = this.config.filter(item => this.itemShowCheck(item))
      },
      deep: true,
      immediate: true
    },
    feature: {
      handler: function (val, oldVal) {
        // console.log(this.config)
        this.newConfig = this.config.filter(item => this.itemShowCheck(item))
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 判断各操作权限
    checkAction (key) {
      const a = this.action[key]
      if (typeof a === 'object') {
        return a.auth
      } else if (typeof a === 'function') {
        return a && a(this.feature)
      } else {
        return a
      }
    },
    // 获取各操作权限的tooltip提示
    getActionString (key, defaultString) {
      const a = this.action[key]
      if (typeof a === 'object') {
        return a.title
      } else {
        return defaultString
      }
    },
    // 判断是不是需要显示该项
    itemShowCheck (item) {
      // console.log(typeof item.isShow === 'function')
      if (typeof item.isShow === 'function' || typeof item.isShow === 'boolean') {
        // console.log(typeof item.isShow === 'function')
        if (typeof item.isShow === 'function') {
          // console.log(this.feature)
          return item.isShow(item, this.feature)
        }
        return item.isShow
      }
      return true
    },
    /**
     * hover      //hover
     preview    //预览
     operate    //重新检测
     select     //是否可以选择
     edit       //编辑
     confirm    //追加目标
     info       //查看详情
     * */
    seeItem () {
      // 特殊处理，避免点击图片查看详情了
      if (this.checkAction('preview')) {
        this.$emit('seeItem', this.feature)
      }
    },
    // // 查看
    // seeItem() {
    //   // 特殊处理，避免点击图片查看详情了
    //   if (this.checkAction('preview')) {
    //     this.$emit('seeItem', this.feature)
    //   }
    // },
    operateItem () {
      this.$emit('operateItem', this.feature)
    },
    editItem () {
      this.$emit('editItem', this.feature)
    },
    confirmItem () {
      this.$emit('confirmItem', this.feature)
    },
    seeDetail () {
      this.$emit('seeDetail', this.feature)
    },
    pathItem () {
      this.$emit('pathItem', this.feature)
    },
    localItem () {
      this.$emit('localItem', this.feature)
    },
    deleteItem () {
      this.$emit('deleteItem', this.feature)
    },
    saveItem () {
      this.$emit('saveItem', this.feature)
    },
    selectChange () {
      // 禁止的时候禁止选择
      if (this.feature.disabled || this.disabled) {
        return
      }
      this.$emit('selectChange', this.feature)
    },
    alignment () {
      // console.log('1111')
      this.$emit('alignment', this.feature)
    },
    // 双击复制
    dbClick (item, e) {
      if (!this.copyable) return
      if (item.copyable !== undefined && item.copyable !== null && !item.copyable) return
      // console.log('双击',this.feature[item.key])
      const text = `${(item.copyValue && item.copyValue(this.feature)) || (item.render && item.render(this.feature)) || this.feature[item.key]}`
      this.dbClickText(text, e)
    },
    dbClickText (text, e) {
      if (text || text === 0) {
        const clipboard = new Clipboard('.copy-target', {
          text: () => {
            return text
          }
        })
        clipboard.on('success', () => {
          this.$message.success({ content: '复制成功' + text, key: 'success', duration: 1 })
          clipboard.destroy()
        })
        clipboard.on('error', () => {
          this.$message.error({ content: '复制失败', key: 'error', duration: 1 })
          clipboard.destroy()
        })
        clipboard.onClick(e)
      } else {
        this.$message.info('复制内容为空')
      }
    },
    getItemTitle (item) {
      return (item.render && item.render(this.feature)) || this.feature[item.key]
    }
  }
}
</script>

<style lang='less' scoped>

@card-item-bind-color: var(--danger-color);

//.left-card-list .is_hover {
//  z-index: 10;
//  box-sizing: border-box;
//  position: relative;
//}

.theme-mode-light {
  .left-card-item-container {
    color: #222333;
    border: 1px solid #DFE0EB;
    background: #FFFFFF;
  }

  .left-card-item-text-label {
    color: #2C5FDB;
  }

  .left-card-item-text-value {
    color: #667489;
    font-size: 14px;
    height: 20px;
    margin-bottom: 4px;
    //font-family: MicrosoftYaHei;

    &:first-of-type {
      color: #222333;
      font-size: 14px;
      font-weight: bold;
      line-height: 19px;
      margin-bottom: 8px;

      .item-iconfont {
        color: #222333;
      }

      //font-family: MicrosoftYaHei-Bold;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .left-card-item-text-value-bold {
    color: #222333;
    font-size: 14px;
    font-weight: bold;
  }

  .left-card-item-action .iconfont {
    color: #919BA7;

    &:hover {
      color: #2C5FDB;
    }
  }

  .card-tri {
    background: #D0D1DD;
  }

  .card-tri:after {
    border-color: #FFFFFF;
  }

  .card-tri-selected {
    background: #003ED6;
  }

  .is_hover:not(.is_selected) {
    &:hover {
      border: 2px solid #D0D1DD;
      box-shadow: 0 2px 12px 0 #D0D1DD, 0 16px 16px -16px rgba(208, 209, 221, 0.75);
    }
  }

  .is_read {
    background: #F5F7F9;
    border: 1px solid #DFE0EB;
  }

  .is_selected {
    border: 2px solid #003ED6;
    //background: #F1F5FF;
  }

  .item-iconfont {
    color: #B2BBC8;
  }
}

.theme-mode-dark {
  .left-card-item-container {
    color: #D7DCEB;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.05);
  }

  .left-card-item-text-label {
    color: #73dcff;
  }

  .left-card-item-text-value {
    color: #D7DCEB;
    font-size: 14px;
    height: 20px;
    margin-bottom: 4px;
    //font-family: MicrosoftYaHei;

    &:first-of-type {
      color: #FFFFFF;
      font-size: 14px;
      font-weight: bold;
      line-height: 19px;
      margin-bottom: 6px;

      .item-iconfont {
        color: #FFFFFF;
      }

      //font-family: MicrosoftYaHei-Bold;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .left-card-item-text-value-bold {
    color: #222333;
    font-size: 14px;
    font-weight: bold;
    line-height: 19px;
  }

  .left-card-item-action .iconfont {
    color: #D8D8D8;

    &:hover {
      color: #00BFFF;
    }
  }

  .card-tri {
    background: #41528D;
  }

  .card-tri-selected {
    background: #00BFFF;
  }

  .card-tri:after {
    border-color: #0E2C76;
  }

  .is_hover:not(.is_selected) {
    &:hover {
      border: 2px solid rgba(255, 255, 255, 0.35);
      //border: 2px solid rgba(255, 255, 255,0.3);
      //box-shadow: 0 16px 16px -16px rgba(255,255,255,0.35), 0 2px 12px 0 rgba(255,255,255)
      box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.25), 0 0 12px 0 rgba(255, 255, 255, 0.3);
    }
  }

  .is_read {
    background: rgba(255, 255, 255, 0.0875);
    border: 1px solid rgba(255, 255, 255, 0.35);
  }

  .is_selected {
    border: 2px solid #00BFFF;
    //background: transparent;
  }

  .item-iconfont {
    color: #D7DCEA;
  }
}

.left-card-item {
  &-container {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    overflow: hidden;
    transition: none !important;
  }

  &-text {
    height: 100%;
    overflow: hidden;
    width: 100%;
    padding-top: 12px;

    &-label {
      width: 100%;
      white-space: nowrap; /* 规定文本是否折行 */
      overflow: hidden; /* 规定超出内容宽度的元素隐藏 */
      text-overflow: ellipsis;
      text-align: right;
      margin-right: 3px;
      //color: var(--primary-color);
    }

    &-value {
      width: 100%;
      white-space: nowrap; /* 规定文本是否折行 */
      overflow: hidden; /* 规定超出内容宽度的元素隐藏 */
      text-overflow: ellipsis;
    }
  }

  &-action {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .iconfont {
      font-size: 24px;
      margin-left: 8px;
      cursor: pointer;

      //&:hover {
      //  color: @card-item-iconfont-color-hover;
      //}
    }
  }

  &-content {
    display: flex;
    width: 100%;
    position: relative;

    &-left {
      width: 100px;
      border-radius: 6px;
      position: relative;
      height: 100%;
      margin-right: 10px;
      overflow: hidden;
    }

    &-right {
      border-radius: 6px;
      position: relative;
      width: calc(100% - 110px);
      height: 100%;
    }
  }

  &-float-button {
    position: absolute;
    top: 6px;
    right: 6px;
  }
}

.icon-play {
  color: rgba(255, 255, 255, 0.4);
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-tri {
  position: absolute;
  right: -25px;
  top: -25px;
  /*直角三角*/
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.card-tri:after {
  content: '';
  display: inline-block;
  margin-left: 12px;
  margin-bottom: -22px;
  width: 8px;
  height: 12px;
  transform: rotate(45deg);
  border-style: solid;
  //border-color: rgba(0, 0, 0, 0.2);
  border-width: 0 2px 2px 0;
}

//.card-tri-selected {
//  background: @card-item-select-color;
//}

.tri-selected:after {
  border-color: white;
}

.feature-image {
  height: 100%;
  width: 100%;
}

//卡片状态
.is_hover {
  &:hover {
    //border: 2px solid @card-item-select-color;

    .delete-icon {
      display: block;
    }
  }
}

//.is_selected {
//  border: 2px solid @card-item-select-color;
//  background: @card-item-select-background;
//}

.is_disabled {
  //pointer-events: none;
  //cursor: none;
  cursor: not-allowed;
  //opacity: 0.8;
}

.is_bind {
  border: 2px solid @card-item-bind-color !important;
  //box-shadow: 0px 0px 8px 0px rgba(255, 77, 79, 0.50);
}

.sequence-frame {
  color: #FFFFFF;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  width: 73px;
  height: 24px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  background-color: rgba(27, 32, 63, 0.75);
}

.item-iconfont {
  font-size: 16px;
}

.icon-button {
  font-size: 24px;
}
</style>
