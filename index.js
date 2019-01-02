import BestButton from './button.vue'
import './button.scss'

export default function install (Vue) {
  Vue.component(BestButton.name, BestButton)
}

export { BestButton }
