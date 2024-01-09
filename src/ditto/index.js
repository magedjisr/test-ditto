import components__actions__arabic from './components__actions__arabic.json';
import components__actions__base from './components__actions__base.json';
import components__confirmation_modals__base from './components__confirmation-modals__base.json';
import components__date_pickers__arabic from './components__date-pickers__arabic.json';
import components__date_pickers__base from './components__date-pickers__base.json';
import components__navigation__arabic from './components__navigation__arabic.json';
import components__navigation__base from './components__navigation__base.json';
import components__pickers__arabic from './components__pickers__arabic.json';
import components__pickers__base from './components__pickers__base.json';
import components__text_fields__arabic from './components__text-fields__arabic.json';
import components__text_fields__base from './components__text-fields__base.json';

export default {
  "ditto_component_library": {
    "arabic": {...components__actions__arabic, ...components__date_pickers__arabic, ...components__navigation__arabic, ...components__pickers__arabic, ...components__text_fields__arabic},
    "base": {...components__actions__base, ...components__confirmation_modals__base, ...components__date_pickers__base, ...components__navigation__base, ...components__pickers__base, ...components__text_fields__base}
  }
}