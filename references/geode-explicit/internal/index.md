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

* [BRepComputer](BRepComputer.md)
* [BRepModelerMappingsBuilder](BRepModelerMappingsBuilder.md)
* [EdgeStamp](EdgeStamp.md)
* [ExtractedEdgedCurveInfoBuilder](ExtractedEdgedCurveInfoBuilder.md)
* [ExtractedEdgedCurveInfo](ExtractedEdgedCurveInfo.md)
* [ExtractedMeshInfoBuilder](ExtractedMeshInfoBuilder.md)
* [ExtractedMeshInfo](ExtractedMeshInfo.md)
* [ExtractedMeshes](ExtractedMeshes.md)
* [ExtractedTriangulatedSurfaceInfoBuilder](ExtractedTriangulatedSurfaceInfoBuilder.md)
* [ExtractedTriangulatedSurfaceInfo](ExtractedTriangulatedSurfaceInfo.md)
* [InsertionGraphPerformer](InsertionGraphPerformer.md)
* [MacroEdgeSimplifier](MacroEdgeSimplifier.md)
* [MacroTriangleSimplifier](MacroTriangleSimplifier.md)
* [MacroTriangleStitchingTool](MacroTriangleStitchingTool.md)
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
unique_ptr build_surface(const BoundingBox2D & bbox, const IsotropicMetric2D & metric)
```


### build_solid

```cpp
unique_ptr build_solid(const BoundingBox3D & bbox, const IsotropicMetric3D & metric)
```


### extract_macro_info

```cpp
tuple extract_macro_info(const BackgroundSolid & background_solid, const MeshElements & to_extract)
```


### find_elements_to_insert

```cpp
ElementGraph find_elements_to_insert(const Meshes & meshes)
```


### find_elements_to_insert_on_border

```cpp
ElementGraph find_elements_to_insert_on_border(const Meshes & meshes, vector border_surfaces)
```


### output_subgraphs

```cpp
void output_subgraphs(const Graph & graph, Span subgraph_ids, index_t nb_subgraph)
```




