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

* [BRepExplicitModelerRemainingException](BRepExplicitModelerRemainingException.md)
* [BRepExplicitModeler](BRepExplicitModeler.md)
* [BRepMappings](BRepMappings.md)
* [BRepSolidModeler](BRepSolidModeler.md)
* [BRepVolumicInserter](BRepVolumicInserter.md)
* [ElementGraph](ElementGraph.md)
* [ExplicitBRepLibrary](ExplicitBRepLibrary.md)
* [ExplicitCommonLibrary](ExplicitCommonLibrary.md)
* [ExplicitSectionLibrary](ExplicitSectionLibrary.md)
* [MeshElements](MeshElements.md)
* [Meshes](Meshes.md)
* [ModelMappings](ModelMappings.md)
* [SectionExplicitModeler](SectionExplicitModeler.md)
* [uuid](uuid.md)


## Functions

### inspect_generated_brep

```cpp
void inspect_generated_brep(const BRep & brep)
```




