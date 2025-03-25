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



## Functions

### convert_computation_grid_to_surface_mesh

```cpp
unique_ptr convert_computation_grid_to_surface_mesh(const ComputationGrid<2> & grid)
```


### convert_computation_grid_to_solid_mesh

```cpp
unique_ptr convert_computation_grid_to_solid_mesh(const ComputationGrid<3> & grid)
```


### mean_plane_around_points

```cpp
OwnerPlane mean_plane_around_points(const PointSet3D & mesh, Span mesh_vertices_indices)
```


 Compute mean plane around mesh Points with Least Squares, using only the points with given indices.

**mesh** [in] Input mesh

**mesh_vertices_indices** [in] Indices of mesh vertices to use

### mean_plane_around_curve_points

```cpp
OwnerPlane mean_plane_around_curve_points(const EdgedCurve3D & mesh, Span mesh_vertices_indices)
```


### mean_plane_around_surface_points

```cpp
OwnerPlane mean_plane_around_surface_points(const SurfaceMesh3D & mesh, Span mesh_vertices_indices)
```




