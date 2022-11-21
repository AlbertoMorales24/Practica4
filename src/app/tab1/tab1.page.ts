import { Component, OnInit } from '@angular/core';

import { getDatabase, ref, onValue } from 'firebase/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  listaClaves: any[] = [{ status: '', usuario: '' }];
  listaKeys: any[] = [];

  constructor() {}
  ngOnInit(): void {
    const db = getDatabase();
    const starCountRef = ref(db, 'claves/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0;
      snapshot.forEach((element) => {
        this.listaKeys[cont] = element.key;
        this.listaClaves[cont] = element.toJSON();
        cont++;
      });
    });
    console.log('lista de claves', this.listaClaves);
  }
}
