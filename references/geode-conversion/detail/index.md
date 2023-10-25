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

* [BRepFromMeshesBuilder](BRepFromMeshesBuilder.md)
* [BRepFromSolidElementsBuilder](BRepFromSolidElementsBuilder.md)
* [CornersLinesBuilder](CornersLinesBuilder.md)
* [ModelBuilderFromMeshes](ModelBuilderFromMeshes.md)
* [SectionFromMeshesBuilder](SectionFromMeshesBuilder.md)
* [SectionFromSurfaceElementsBuilder](SectionFromSurfaceElementsBuilder.md)
* [WireframeBuilderFromOneMesh](WireframeBuilderFromOneMesh.md)


## Functions

### point_set_on_lines_sharp_vertices

```cpp
int point_set_on_lines_sharp_vertices(int lines, double max_angle)
```


### model_component_meshes_with_updated_id

```cpp
int model_component_meshes_with_updated_id(const ComponentRange & range)
```


### ref_meshes

```cpp
int ref_meshes(int meshes)
```




