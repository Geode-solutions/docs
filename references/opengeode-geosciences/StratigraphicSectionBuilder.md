# class StratigraphicSectionBuilder


 Class managing modifications of a StratigraphicSection



```cpp
Inherits from ImplicitCrossSectionBuilder
```



## Functions

### StratigraphicSectionBuilder

```cpp
public void StratigraphicSectionBuilder(StratigraphicSection & stratigraphic_section)
```


### copy

```cpp
public ModelCopyMapping copy(const StratigraphicSection & stratigraphic_section)
```


### reinitialize_stratigraphic_query_trees

```cpp
public void reinitialize_stratigraphic_query_trees()
```


### instantiate_stratigraphic_attribute_on_surfaces

```cpp
public void instantiate_stratigraphic_attribute_on_surfaces()
```


### set_stratigraphic_location

```cpp
public void set_stratigraphic_location(const Surface2D & surface, index_t vertex_id, Point value)
```


### set_stratigraphic_coordinates

```cpp
public void set_stratigraphic_coordinates(const Surface2D & surface, index_t vertex_id, const StratigraphicPoint2D & value)
```




