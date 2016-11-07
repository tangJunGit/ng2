import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../ngfactory/src/app/app.module.ngfactory';

const platform = platformBrowser();
platform.bootstrapModuleFactory(AppModuleNgFactory);