import MEditor from '../monacoEditor';

const include = [
  'qs',
  'url',
  'vue',
  'sass',
  'mitt',
  'axios',
  'pinia',
  'dayjs',
  'qrcode',
  'unocss',
  'vue-router',
  'vue-types',
  'vue-i18n',
  'crypto-js',
  'cropperjs',
  'lodash-es',
  'nprogress',
  'web-storage-cache',
  '@iconify/iconify',
  '@vueuse/core',
  '@zxcvbn-ts/core',
  'echarts/core',
  'echarts/charts',
  'echarts/components',
  'echarts/renderers',
  'echarts-wordcloud',
  '@wangeditor/editor',
  '@wangeditor/editor-for-vue',
  'element-plus',
  'element-plus/es',
  'element-plus/es/locale/lang/zh-cn',
  'element-plus/es/locale/lang/en',
  'element-plus/es/components/avatar/style/css',
  'element-plus/es/components/space/style/css',
  'element-plus/es/components/backtop/style/css',
  'element-plus/es/components/form/style/css',
  'element-plus/es/components/radio-group/style/css',
  'element-plus/es/components/radio/style/css',
  'element-plus/es/components/checkbox/style/css',
  'element-plus/es/components/checkbox-group/style/css',
  'element-plus/es/components/switch/style/css',
  'element-plus/es/components/time-picker/style/css',
  'element-plus/es/components/date-picker/style/css',
  'element-plus/es/components/descriptions/style/css',
  'element-plus/es/components/descriptions-item/style/css',
  'element-plus/es/components/link/style/css',
  'element-plus/es/components/tooltip/style/css',
  'element-plus/es/components/drawer/style/css',
  'element-plus/es/components/dialog/style/css',
  'element-plus/es/components/checkbox-button/style/css',
  'element-plus/es/components/option-group/style/css',
  'element-plus/es/components/radio-button/style/css',
  'element-plus/es/components/cascader/style/css',
  'element-plus/es/components/color-picker/style/css',
  'element-plus/es/components/input-number/style/css',
  'element-plus/es/components/rate/style/css',
  'element-plus/es/components/select-v2/style/css',
  'element-plus/es/components/tree-select/style/css',
  'element-plus/es/components/slider/style/css',
  'element-plus/es/components/time-select/style/css',
  'element-plus/es/components/autocomplete/style/css',
  'element-plus/es/components/image-viewer/style/css',
  'element-plus/es/components/upload/style/css',
  'element-plus/es/components/col/style/css',
  'element-plus/es/components/form-item/style/css',
  'element-plus/es/components/alert/style/css',
  'element-plus/es/components/select/style/css',
  'element-plus/es/components/input/style/css',
  'element-plus/es/components/breadcrumb-item/style/css',
  'element-plus/es/components/tag/style/css',
  'element-plus/es/components/pagination/style/css',
  'element-plus/es/components/table/style/css',
  'element-plus/es/components/table-v2/style/css',
  'element-plus/es/components/table-column/style/css',
  'element-plus/es/components/card/style/css',
  'element-plus/es/components/row/style/css',
  'element-plus/es/components/button/style/css',
  'element-plus/es/components/menu/style/css',
  'element-plus/es/components/sub-menu/style/css',
  'element-plus/es/components/menu-item/style/css',
  'element-plus/es/components/option/style/css',
  'element-plus/es/components/dropdown/style/css',
  'element-plus/es/components/dropdown-menu/style/css',
  'element-plus/es/components/dropdown-item/style/css',
  'element-plus/es/components/skeleton/style/css',
  'element-plus/es/components/tree/style/css',
  'element-plus/es/components/badge/style/css',
  'element-plus/es/components/breadcrumb/style/css',
  'element-plus/es/components/image/style/css',
  'element-plus/es/components/collapse-transition/style/css',
  'element-plus/es/components/timeline/style/css',
  'element-plus/es/components/timeline-item/style/css',
  'element-plus/es/components/collapse/style/css',
  'element-plus/es/components/collapse-item/style/css',
  'element-plus/es/components/button-group/style/css',
  'element-plus/es/components/text/style/css',
  'element-plus/es/components/header/style/css',
  'element-plus/es/components/popconfirm/style/css',
  'element-plus/es/components/empty/style/css',
  'element-plus/es/components/loading/style/css',
  'element-plus/es/components/container/style/css',
  'element-plus/es/components/main/style/css',
  'element-plus/es/components/aside/style/css',
  'element-plus/es/components/progress/style/css',
  'element-plus/es/components/steps/style/css',
  'element-plus/es/components/step/style/css',
  '@smallwei/avue',
  '@smallwei/avue/lib/index.css',
  'monaco-editor/esm/vs/editor/editor.main',
  'vxe-table/es/vxe-ui/index.js',
  '@kangc/v-md-editor',
  '@kangc/v-md-editor/lib/preview',
  '@kangc/v-md-editor/lib/style/preview.css',
  '@kangc/v-md-editor/lib/theme/github.js',
  '@kangc/v-md-editor/lib/theme/style/github.css',
  'highlight',
  '@kangc/v-md-editor/lib/codemirror-editor',
  '@kangc/v-md-editor/lib/style/codemirror-editor.css',
  '@kangc/v-md-editor/lib/plugins/todo-list/index',
  '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css',
  '@kangc/v-md-editor/lib/plugins/tip/index',
  '@kangc/v-md-editor/lib/plugins/tip/tip.css',
  'codemirror',
  'codemirror/mode/markdown/markdown',
  'codemirror/mode/javascript/javascript',
  'codemirror/mode/css/css',
  'codemirror/mode/htmlmixed/htmlmixed',
  'codemirror/mode/vue/vue',
  'codemirror/addon/edit/closebrackets',
  'codemirror/addon/edit/closetag',
  'codemirror/addon/edit/matchbrackets',
  'codemirror/addon/display/placeholder',
  'codemirror/addon/selection/active-line',
  'codemirror/addon/scroll/simplescrollbars',
  'codemirror/addon/scroll/simplescrollbars.css',
  'codemirror/lib/codemirror.css',
]

const exclude = ['@iconify/json']

const esbuildOptions = {
  plugins: [
    //monacoEditor汉化
    MEditor.esbuildPluginMonacoEditorNls({
      locale: MEditor.Languages.zh_hans,
      localeData: MEditor.i18n,
    }),
  ],
}

export { include, exclude, esbuildOptions }
