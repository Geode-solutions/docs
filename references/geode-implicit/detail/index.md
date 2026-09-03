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

* [ImplicitStreamLine](ImplicitStreamLine.md)
* [ScalarFunctionExtrapolationInfo](ScalarFunctionExtrapolationInfo.md)


## Functions

### convert_computation_grid_to_surface_mesh

```cpp
std::unique_ptr<TriangulatedSurface2D> convert_computation_grid_to_surface_mesh(const ComputationGrid<2> & grid)
```


### tangential_data_from_curve

```cpp
std::unique_ptr<PointSet<dimension>> tangential_data_from_curve(const EdgedCurve<dimension> & data_curve, const uuid & weight_attribute_id_in, const uuid & weight_attribute_id_out, const uuid & direction_attribute_id_out)
```


### create_geode_implicit_weight_attribute

```cpp
std::shared_ptr<VariableAttribute<double>> create_geode_implicit_weight_attribute(const Mesh & mesh, const uuid & weight_attribute_id)
```


### normal_data_from_surface

```cpp
std::unique_ptr<PointSet3D> normal_data_from_surface(const SurfaceMesh3D & data_surface, const uuid & weight_attribute_id_in, const uuid & weight_attribute_id_out, const uuid & direction_attribute_id_out)
```


### find_geode_implicit_weight_attribute

```cpp
std::shared_ptr<VariableAttribute<double>> find_geode_implicit_weight_attribute(const Mesh & mesh, const uuid & attribute_id)
```


### convert_computation_grid_to_solid_mesh

```cpp
std::unique_ptr<HybridSolid3D> convert_computation_grid_to_solid_mesh(const ComputationGrid<3> & grid)
```


### create_geode_implicit_direction_attribute

```cpp
std::shared_ptr<VariableAttribute<Vector<Mesh::dim>>> create_geode_implicit_direction_attribute(const Mesh & mesh, const uuid & direction_attribute_id)
```


### find_geode_implicit_direction_attribute

```cpp
std::shared_ptr<VariableAttribute<Vector<Mesh::dim>>> find_geode_implicit_direction_attribute(const Mesh & mesh, const uuid & attribute_id)
```


### extrapolate_surface_mesh_scalar_function

```cpp
void extrapolate_surface_mesh_scalar_function(const SurfaceMesh<dimension> & surface_mesh, const uuid & scalar_function_id, absl::Span<const index_t> undefined_vertices)
```


### compute_cut_grid_streamline

```cpp
std::optional<ImplicitStreamLine<dimension>> compute_cut_grid_streamline(const CutGrid<dimension> & grid, const Point<dimension> & starting_position, absl::flat_hash_set<typename CutGrid<dimension>::CellIndices> & visited_cells)
```


### extrapolate_solid_mesh_scalar_function

```cpp
void extrapolate_solid_mesh_scalar_function(const SolidMesh3D & solid_mesh, const uuid & scalar_function_id, absl::Span<const index_t> undefined_vertices)
```


### grid_densification_pattern

```cpp
std::array<bool, dimension> grid_densification_pattern(const ComputationGrid<dimension> & grid)
```


### split_block_mesh_from_isovalues_on_grid

```cpp
void split_block_mesh_from_isovalues_on_grid(BRep & model, const Block3D & block, const TetrahedralSolid3D & block_mesh, VariableAttribute<double> & block_function_attribute, const ComputationGrid3D & grid, absl::Span<const double> values_to_densify_around)
```


### densification_pattern

```cpp
std::array<bool, dimension> densification_pattern(const BoundingBox<dimension> & box, const std::array<index_t, dimension> & current_cells_number)
```


### split_block_mesh_from_isovalues_on_cut_solid_grid

```cpp
void split_block_mesh_from_isovalues_on_cut_solid_grid(BRep & model, const Block3D & block, const TetrahedralSolid3D & block_mesh, VariableAttribute<double> & block_function_attribute, const internal::CutSolidGrid & grid, absl::Span<const double> values_to_densify_around)
```


### extrapolate_surface_mesh_scalar_function

```cpp
void extrapolate_surface_mesh_scalar_function(const SurfaceMesh<dimension> & surface_mesh, const ScalarFunctionExtrapolationInfo & extrapolation_info)
```


### extrapolate_solid_mesh_scalar_function

```cpp
void extrapolate_solid_mesh_scalar_function(const SolidMesh3D & solid_mesh, const ScalarFunctionExtrapolationInfo & extrapolation_info)
```




