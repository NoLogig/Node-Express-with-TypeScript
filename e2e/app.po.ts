<<<<<<< HEAD
import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class InspirationStationPage {
=======
export class MeanSkelettonPage {
>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6
=======
import { browser, element, by } from 'protractor';

export class TmpPage {
>>>>>>> 3ee57cea1c0778c3534aa3feacddba2def4d8e3f
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
