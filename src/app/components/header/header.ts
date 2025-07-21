import { Component } from '@angular/core';
import { HeaderTitle } from './components/header-title';
import { HeaderInput } from './components/header-input';

@Component({
  imports: [HeaderTitle, HeaderInput],
  selector: 'td-header',
  templateUrl: 'header.html',
})
export class Header {}
