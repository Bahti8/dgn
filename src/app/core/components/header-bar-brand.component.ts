import {Component} from '@angular/core';

@Component({
  selector: 'app-header-bar-brand',
  template: `
      <div class="navrow">
          <div class="container">
              <ul>
                  <li>
                      <a href="#" class="navbar-link">
                    <span class="icon" style="margin-right: 10px">

                    </span>
                          Demo Mekanları
                      </a>
                  </li>
                  <li>
                      <a href="#" class="navbar-link">
                    <span class="icon" style="margin-right: 10px">

                    </span>
                          Demo Firmaları
                      </a>
                  </li>
                  <li>
                      <a href="#" class="navbar-link">
                    <span class="icon" style="margin-right: 10px">

                    </span>
                          Keşfet
                      </a>
                  </li>
                  <li>
                      <a href="" class="navbar-link">
                    <span class="icon" style="margin-right: 10px">

                    </span>
                          Kampanyalar
                      </a>
                  </li>
                  <li>
                      <a href="#" class="navbar-link">
                    <span class="icon" style="margin-right: 0px">
                    </span>
                          Araçlar
                      </a>
                  </li>
              </ul>
              <div class="menu1 menudropdown">
                  <div class="row">
                      <div class="col-lg-3">
                          <a href="" class="dropdown-item" data-linkindex="1" data-track="venues-child">
                              Kır Demoü
                          </a>
                          <a href="" class="dropdown-item" data-linkindex="2" data-track="venues-child">
                              Oteller
                          </a>
                          <a href="" class="dropdown-item" data-linkindex="3" data-track="venues-child">
                              Tarihi Mekanlar
                          </a>
                          <a href="" class="dropdown-item" data-linkindex="4" data-track="venues-child">
                              Sosyal Tesisler
                          </a>
                          <a href="" class="dropdown-item" data-linkindex="5" data-track="venues-child">
                              Restoranlar
                          </a>
                          <a href="" class="dropdown-item" data-linkindex="6" data-track="venues-child">
                              Kulüpler/Davet Alanları
                          </a>
                          <a href="" class="dropdown-item" data-linkindex="7" data-track="venues-child">
                              Tekne Demoü
                          </a>
                          <a href="" class="dropdown-item" data-linkindex="8" data-track="venues-child">
                              Nikah Sonrası Yemeği
                          </a>
                          <a href="" class="dropdown-item" data-linkindex="9" data-track="venues-child">
                              Demo Salonları
                          </a>
                          <a href="" class="dropdown-item" data-linkindex="10" data-track="venues-child">
                              Söz, Nişan Mekanları
                          </a>
                      </div>
                      <div class="col-lg-9">
                          <img width="100%" height="100%" src="../../assets/images/menuimage.png">
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `
})
export class HeaderBarBrandComponent {
}
