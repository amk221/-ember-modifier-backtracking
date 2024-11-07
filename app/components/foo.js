import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { next } from '@ember/runloop';
import { action } from '@ember/object';

export default class Foo extends Component {
  @tracked foo;

  @action
  handleFoo() {
    console.log('handle foo');

    if (this.foo) {
      console.log('reading');
    }

    this.foo = 'inside';
  }
}
