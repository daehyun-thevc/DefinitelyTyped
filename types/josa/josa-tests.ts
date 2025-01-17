import { Josa, josa, getJosaPicker, makeJosaify } from 'josa';

josa('비시스와즈'); // $ExpectType string
josa('사람들#{은} 작동만 되면 그 원리#{는} 신경#{을} 안쓰지'); // $ExpectType string

getJosaPicker('은');
getJosaPicker('은')('사람'); // $ExpectType Topic

getJosaPicker('이');
getJosaPicker('이')('사람'); // $ExpectType Subject

getJosaPicker('을');
getJosaPicker('을')('사람'); // $ExpectType Objective

getJosaPicker('와');
getJosaPicker('와')('사람'); // $ExpectType Conjunction

getJosaPicker('로');
getJosaPicker('로')('사람'); // $ExpectType Means

makeJosaify('은');
makeJosaify('은')('사람'); // $ExpectType string

export const selectJosa = <T extends Josa>(target: string, josa: T, _?: T) => getJosaPicker(josa)(target);
selectJosa('사람', '은'); // $ExpectType Topic
