/**
 *
 * Asynchronously loads the component for EditPage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
