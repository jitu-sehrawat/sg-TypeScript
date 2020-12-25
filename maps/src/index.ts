import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const GMAP_DIV_ID_IN_HTML = 'map';
const customMap = new CustomMap(GMAP_DIV_ID_IN_HTML);

customMap.addMarker(user);
customMap.addMarker(company);
