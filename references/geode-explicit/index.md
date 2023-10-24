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

* [detail](detail/index.md)


## Records

* [BRepExplicitModeler](BRepExplicitModeler.md)
* [BRepMappings](BRepMappings.md)
* [BRepVolumicInserter](BRepVolumicInserter.md)
* [ExplicitBRepLibrary](ExplicitBRepLibrary.md)
* [ExplicitCommonLibrary](ExplicitCommonLibrary.md)
* [ExplicitSectionLibrary](ExplicitSectionLibrary.md)
* [ModelMappings](ModelMappings.md)
* [ModelMeshesElementMapping](ModelMeshesElementMapping.md)
* [ModelMeshesVertexMapping](ModelMeshesVertexMapping.md)
* [SectionExplicitModeler](SectionExplicitModeler.md)
* [uuid](uuid.md)


## Functions

### simplify_brep_from_macro_information

```cpp
void simplify_brep_from_macro_information(BRep & brep, ModelMeshesElementMapping & mesh_element_mappings, ModelMeshesVertexMapping & mesh_vertices_mappings)
```




