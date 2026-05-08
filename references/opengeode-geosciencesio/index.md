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

* [BRepGeosExporter](BRepGeosExporter.md)
* [ModelToMeshMappings](ModelToMeshMappings.md)
* [OpenGeodeGeosciencesIOException](OpenGeodeGeosciencesIOException.md)
* [OpenGeodeGeosciencesIOMeshException](OpenGeodeGeosciencesIOMeshException.md)
* [OpenGeodeGeosciencesIOMeshLibrary](OpenGeodeGeosciencesIOMeshLibrary.md)
* [OpenGeodeGeosciencesIOModelException](OpenGeodeGeosciencesIOModelException.md)
* [OpenGeodeGeosciencesIOModelLibrary](OpenGeodeGeosciencesIOModelLibrary.md)
* [StructuralModelGeosExporter](StructuralModelGeosExporter.md)
* [uuid](uuid.md)


