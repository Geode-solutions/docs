# class StratigraphicModelBuilder

Class managing modifications of a StratigraphicModel

```cpp
Inherits from ImplicitStructuralModelBuilder
```

## Functions

### StratigraphicModelBuilder

```cpp
public void StratigraphicModelBuilder(StratigraphicModel & stratigraphic_model_)
```

### copy

```cpp
public int copy(const StratigraphicModel & implicit_model)
```

### reinitialize_stratigraphic_query_trees

```cpp
public void reinitialize_stratigraphic_query_trees()
```

### instantiate_stratigraphic_attribute_on_blocks

```cpp
public void instantiate_stratigraphic_attribute_on_blocks()
```

### set_stratigraphic_location

```cpp
public void set_stratigraphic_location(const Block3D & block, index_t vertex_id, Point2D value)
```

### set_stratigraphic_coordinates

```cpp
public void set_stratigraphic_coordinates(const Block3D & block, index_t vertex_id, const StratigraphicPoint3D & value)
```
