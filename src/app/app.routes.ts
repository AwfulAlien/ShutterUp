import { RouterModule, Routes } from '@angular/router';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { PrefsComponent } from './prefs/prefs.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path:'chat',component: ChatScreenComponent},
    { path:'pref',component: PrefsComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}