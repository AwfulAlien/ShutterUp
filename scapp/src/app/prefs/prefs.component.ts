import { Component, inject } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes'; 
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface Preference {
  text: string;
}


@Component({
  selector: 'app-prefs',
  templateUrl: './prefs.component.html',
  styleUrl: './prefs.component.css'
})
export class PrefsComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  preferences: Preference[] = [];

  announcer = inject(LiveAnnouncer);


  clickMe() {
    this.preferences.forEach(preference => console.log(preference)); 
    
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.preferences.push({text: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(preference: Preference): void {
    const index = this.preferences.indexOf(preference);

    if (index >= 0) {
      this.preferences.splice(index, 1);

      this.announcer.announce(`Removed ${preference}`);
    }
  }

  edit(preference: Preference, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(preference);
      return;
    }

    // Edit existing fruit
    const index = this.preferences.indexOf(preference);
    if (index >= 0) {
      this.preferences[index].text = value;
    }
  }
}
