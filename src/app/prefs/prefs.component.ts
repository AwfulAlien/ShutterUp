import { Component, inject } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


export interface Preference {
  text: string;
}

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [MatChipsModule, MatFormFieldModule, MatIconModule],
  templateUrl: './prefs.component.html',
  styleUrl: './prefs.component.css'
})
export class PrefsComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  preferences: Preference[] = [{text: 'Lemon'}, {text: 'Lime'}, {text: 'Apple'}];

  announcer = inject(LiveAnnouncer);

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
