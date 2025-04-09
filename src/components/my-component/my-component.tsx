import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Event() myEvent: EventEmitter<MyComponent>;


  render() {
    return <div>Hello, World! </div>;
  }
}
