import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked outsideFoo = 'outside 1';

  @action
  setOutsideFoo() {
    console.log('set outside foo (2)');
    this.outsideFoo = 'outside 2';
  }
}
