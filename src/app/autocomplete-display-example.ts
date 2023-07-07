import { Component, OnInit } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'autocomplete-display-example',
  templateUrl: 'autocomplete-display-example.html',
  styleUrls: ['autocomplete-display-example.css'],
})
export class AutocompleteDisplayExample implements OnInit {
  upiHandles = ['okaxis', 'okicici', 'okhdfcbank', 'oksbi'];
  ngOnInit() {}

  onKeyup(event: any, trigger: MatAutocompleteTrigger) {
    console.log(event.key);
    if (event.key == '@' && !trigger.panelOpen) {
      trigger.openPanel();
      trigger.updatePosition();
    }
  }
}
