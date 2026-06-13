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
* [BRepConformityComputer](BRepConformityComputer.md)
* [BRepModelerMappingsBuilder](BRepModelerMappingsBuilder.md)
* [ExtractedEdgedCurveInfoBuilder](ExtractedEdgedCurveInfoBuilder.md)
* [ExtractedEdgedCurveInfo](ExtractedEdgedCurveInfo.md)
* [ExtractedMeshInfoBuilder](ExtractedMeshInfoBuilder.md)
* [ExtractedMeshInfo](ExtractedMeshInfo.md)
* [ExtractedMeshes](ExtractedMeshes.md)
* [ExtractedTriangulatedSurfaceInfoBuilder](ExtractedTriangulatedSurfaceInfoBuilder.md)
* [ExtractedTriangulatedSurfaceInfo](ExtractedTriangulatedSurfaceInfo.md)
* [InsertionGraphPerformer](InsertionGraphPerformer.md)
* [MeshElementsIndices](MeshElementsIndices.md)
* [ModelerMappingsBuilder](ModelerMappingsBuilder.md)
* [ModelerMetric](ModelerMetric.md)
* [SolidElementsIndices](SolidElementsIndices.md)


## Functions

### extract_macro_info

```cpp
ExtractedMeshes extract_macro_info(const BackgroundSolid & background_solid, const MeshElements & to_extract)
```


### find_elements_to_insert

```cpp
ElementGraph find_elements_to_insert(const Meshes & meshes)
```


### build_surface

```cpp
std::unique_ptr<TriangulatedSurface2D> build_surface(const BoundingBox2D & bbox, const IsotropicMetric2D & metric)
```


### find_elements_to_insert_on_border

```cpp
ElementGraph find_elements_to_insert_on_border(const Meshes & meshes, std::vector<std::reference_wrapper<const SurfaceMesh3D>> border_surfaces)
```


### smallest_acceptable_or_median_distance

```cpp
double smallest_acceptable_or_median_distance(const BoundingBox<dimension> & bbox, const NNSearch<dimension> & points_search)
```


### perform_surface_stitching

```cpp
GenericMapping<index_t> perform_surface_stitching(const TriangulatedSurface3D & surface, TriangulatedSurfaceModifier3D & modifier, absl::Span<const Point3D> points, GenericMapping<index_t> & old2new)
```


### perform_curve_stitching

```cpp
GenericMapping<index_t> perform_curve_stitching(const EdgedCurve3D & curve, EdgedCurveModifier3D & modifier, absl::Span<const Point3D> points, GenericMapping<index_t> & old2new)
```


### build_solid

```cpp
std::unique_ptr<TetrahedralSolid3D> build_solid(const BoundingBox3D & bbox, const IsotropicMetric3D & metric)
```


### output_subgraphs

```cpp
void output_subgraphs(const Graph & graph, absl::Span<const index_t> subgraph_ids, index_t nb_subgraph)
```




