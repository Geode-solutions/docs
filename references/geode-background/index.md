<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# namespace geode



## Namespaces

* [internal](internal/index.md)


## Records

* [BlockElement](BlockElement.md)
* [GeodeBackgroundBRepException](GeodeBackgroundBRepException.md)
* [GeodeBackgroundBRepLibrary](GeodeBackgroundBRepLibrary.md)
* [GeodeBackgroundCommonException](GeodeBackgroundCommonException.md)
* [GeodeBackgroundCommonLibrary](GeodeBackgroundCommonLibrary.md)
* [GeodeBackgroundException](GeodeBackgroundException.md)
* [GeodeBackgroundLineException](GeodeBackgroundLineException.md)
* [GeodeBackgroundLineLibrary](GeodeBackgroundLineLibrary.md)
* [GeodeBackgroundSolidException](GeodeBackgroundSolidException.md)
* [GeodeBackgroundSolidLibrary](GeodeBackgroundSolidLibrary.md)
* [GeodeBackgroundSurfaceException](GeodeBackgroundSurfaceException.md)
* [GeodeBackgroundSurfaceLibrary](GeodeBackgroundSurfaceLibrary.md)
* [InternalDistance](InternalDistance.md)
* [MeshElement](MeshElement.md)
* [Modifier](Modifier.md)
* [uuid](uuid.md)


