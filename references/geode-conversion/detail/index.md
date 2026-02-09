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

# namespace detail



## Records

* [BRepFromSolidElementsBuilder](BRepFromSolidElementsBuilder.md)
* [BRepTopologyRebuilder](BRepTopologyRebuilder.md)
* [CornersLinesBuilder](CornersLinesBuilder.md)
* [ModelBuilderFromMeshes](ModelBuilderFromMeshes.md)
* [SectionFromSurfaceElementsBuilder](SectionFromSurfaceElementsBuilder.md)
* [WireframeBuilderFromOneMesh](WireframeBuilderFromOneMesh.md)


## Functions

### build_brep_from_brep_element

```cpp
BRep build_brep_from_brep_element(const Block3D & block, index_t element_id)
```




