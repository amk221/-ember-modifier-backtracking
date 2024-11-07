import Modifier from 'ember-modifier';

export default class TrackModifier extends Modifier {
  didSetup;

  modify(element, [...args], named) {
    console.log('modify', [...args]);

    if (this.didSetup) {
      console.log('update');
      named.onUpdate();
      return;
    }

    console.log('setup');

    this.didSetup = true;
  }
}
