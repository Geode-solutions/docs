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

# class StratigraphicModel


 A Stratigraphic Model is an ImplicitStructuralModel where each block also has a specific attribute to store the stratigraphic coordinates of its vertices.



```cpp
Inherits from ImplicitStructuralModel
```



## Functions

### StratigraphicModel

```cpp
public void StratigraphicModel()
```


### StratigraphicModel

```cpp
public void StratigraphicModel(StratigraphicModel && implicit_model)
```


### StratigraphicModel

```cpp
public void StratigraphicModel(ImplicitStructuralModel && structural_model)
```


### StratigraphicModel

```cpp
public void StratigraphicModel(StructuralModel && structural_model)
```


### StratigraphicModel

```cpp
public void StratigraphicModel(const StratigraphicModel & initial_model, BRep && brep, const ModelGenericMapping & initial_to_brep_mappings)
```


### ~StratigraphicModel

```cpp
public void ~StratigraphicModel()
```


### clone

```cpp
public StratigraphicModel clone()
```


### component

```cpp
public const Component3D & component(const uuid & id)
```


### native_extension_static

```cpp
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
```


### stratigraphic_coordinates

```cpp
public StratigraphicPoint3D stratigraphic_coordinates(const Block3D & block, index_t vertex_id)
```


 Return the stratigraphic coordinates of the point at the given vertex of the given block.

### stratigraphic_coordinates

```cpp
public std::optional<StratigraphicPoint3D> stratigraphic_coordinates(const Block3D & block, const Point3D & geometric_point)
```


 Return the stratigraphic coordinates of the point, computed in the polyhedron containing the given point in the given block, if there is any.

### stratigraphic_coordinates

```cpp
public StratigraphicPoint3D stratigraphic_coordinates(const Block3D & block, const Point3D & geometric_point, index_t polyhedron_id)
```


 Return the stratigraphic coordinates of the point, computed in the given polyhedron of the given block.

### geometric_coordinates

```cpp
public std::optional<Point3D> geometric_coordinates(const Block3D & block, const StratigraphicPoint3D & stratigraphic_point)
```


 Return the geometric coordinates of the point, computed from its stratigraphic coordinates in the polyhedron containing the given coordinates in the stratigraphic space in the given block, if there is any.

### geometric_coordinates

```cpp
public Point3D geometric_coordinates(const Block3D & block, const StratigraphicPoint3D & stratigraphic_point, index_t polyhedron_id)
```


 Return the geometric coordinates of the point, computed from its stratigraphic coordinates in the given polyhedron of the given block.

### stratigraphic_containing_polyhedron

```cpp
public std::optional<index_t> stratigraphic_containing_polyhedron(const Block3D & block, const StratigraphicPoint3D & stratigraphic_point)
```


 Returns the block polyhedron containing the given stratigraphic point, if there is any.

### stratigraphic_surface

```cpp
public absl::InlinedVector<std::unique_ptr<TriangulatedSurface3D>, 2> stratigraphic_surface(const Block3D & block, const Surface3D & surface)
```


### stratigraphic_bounding_box

```cpp
public BoundingBox3D stratigraphic_bounding_box()
```


### initialize_stratigraphic_query_trees

```cpp
public void initialize_stratigraphic_query_trees(StratigraphicModelBuilderKey )
```


### instantiate_stratigraphic_location_on_blocks

```cpp
public void instantiate_stratigraphic_location_on_blocks(StratigraphicModelBuilderKey )
```


### set_stratigraphic_location

```cpp
public void set_stratigraphic_location(const Block3D & block, index_t vertex_id, stratigraphic_location_type value, StratigraphicModelBuilderKey )
```




