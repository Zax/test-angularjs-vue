import { defineCustomElement } from 'vue';

import MyButton from './components/MyButton.ce.vue';
import MyText from './components/MyText.ce.vue'

const MyButtonWC = defineCustomElement(MyButton);
const MyTextWC = defineCustomElement(MyText);

export function register () {
  customElements.define('my-button', MyButtonWC);
  customElements.define('my-text', MyTextWC);
}