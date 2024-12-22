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

# namespace internal



## Records

* [BRepModelerMappingsBuilder](BRepModelerMappingsBuilder.md)
* [ExtractedEdgedCurveInfo](ExtractedEdgedCurveInfo.md)
* [ExtractedMeshInfo](ExtractedMeshInfo.md)
* [ExtractedMeshes](ExtractedMeshes.md)
* [ExtractedTriangulatedSurfaceInfo](ExtractedTriangulatedSurfaceInfo.md)
* [InformationToExtract](InformationToExtract.md)
* [MeshElementsIndices](MeshElementsIndices.md)
* [ModelerMappingsBuilder](ModelerMappingsBuilder.md)
* [ModelerMetric](ModelerMetric.md)
* [SolidElementsIndices](SolidElementsIndices.md)


## Functions

### smallest_acceptable_or_median_distance

```cpp
double smallest_acceptable_or_median_distance(const BoundingBox<dimension> & bbox, const NNSearch<dimension> & points_search)
```


### build_surface

```cpp
unique_ptr build_surface(const BoundingBox2D & bbox, const Metric2D & metric)
```


### extract_macro_info

```cpp
tuple extract_macro_info(const BackgroundSolid & background_solid, const InformationToExtract & uuids)
```


### find_elements_to_insert

```cpp
MeshElementsMap find_elements_to_insert(const geode::Meshes & meshes)
```


### find_elements_to_insert_on_border

```cpp
MeshElementsMap find_elements_to_insert_on_border(const geode::Meshes & meshes, vector border_surfaces)
```


### build_solid

```cpp
unique_ptr build_solid(const BoundingBox3D & bbox, const Metric3D & metric)
```




