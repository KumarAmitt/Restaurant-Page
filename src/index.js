import './stylesheets/style.scss';

import nav from './js/nav';
import cover from './js/cover';
import feature from './js/feature';
import main from './js/main';
import footer from './js/footer';

const content = document.getElementById('content');

nav({ appendTo: content });
cover({ appendTo: content });
feature({ appendTo: content });
main({ appendTo: content });
footer({ appendTo: content });
