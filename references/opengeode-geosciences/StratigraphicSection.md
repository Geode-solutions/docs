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

# class StratigraphicSection


 A StratigraphicSection is an ImplicitCrossSection where each surface has a specific attribute to store the stratigraphic coordinates of its vertices.



```cpp
Inherits from ImplicitCrossSection
```



## Functions

### StratigraphicSection

```cpp
public void StratigraphicSection()
```


### StratigraphicSection

```cpp
public void StratigraphicSection(StratigraphicSection && stratigraphic_section)
```


### StratigraphicSection

```cpp
public void StratigraphicSection(ImplicitCrossSection && implicit_section)
```


### StratigraphicSection

```cpp
public void StratigraphicSection(CrossSection && cross_section)
```


### StratigraphicSection

```cpp
public void StratigraphicSection(const StratigraphicSection & initial_model, Section && section, const ModelGenericMapping & initial_to_section_mappings)
```


### ~StratigraphicSection

```cpp
public void ~StratigraphicSection()
```


### clone

```cpp
public StratigraphicSection clone()
```


### component

```cpp
public const Component2D & component(const uuid & id)
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
public StratigraphicPoint2D stratigraphic_coordinates(const Surface2D & surface, index_t vertex_id)
```


 Return the stratigraphic coordinates of the point at the given vertex of the given surface.

### stratigraphic_coordinates

```cpp
public std::optional<StratigraphicPoint2D> stratigraphic_coordinates(const Surface2D & surface, const Point2D & geometric_point)
```


 Return the stratigraphic coordinates of the point, calculated in the polygon containing the given point in the given surface, if there is any.

### stratigraphic_coordinates

```cpp
public StratigraphicPoint2D stratigraphic_coordinates(const Surface2D & surface, const Point2D & geometric_point, index_t polygon_id)
```


 Return the stratigraphic coordinates of the point, calculated in the given polygon of the given surface.

### geometric_coordinates

```cpp
public std::optional<Point2D> geometric_coordinates(const Surface2D & surface, const StratigraphicPoint2D & stratigraphic_point)
```


 Return the geometric coordinates of the point, calculated from its stratigraphic coordinates in the polygon containing the given coordinates in the stratigraphic space in the given surface, if there is any.

### geometric_coordinates

```cpp
public Point2D geometric_coordinates(const Surface2D & surface, const StratigraphicPoint2D & stratigraphic_point, index_t polygon_id)
```


 Return the geometric coordinates of the point, calculated from its stratigraphic coordinates in the given polygon of the given surface.

### stratigraphic_containing_polygon

```cpp
public std::optional<index_t> stratigraphic_containing_polygon(const Surface2D & surface, const StratigraphicPoint2D & stratigraphic_point)
```


 Returns a surface polygon containing the given stratigraphic point, if there is any.

### stratigraphic_line

```cpp
public absl::InlinedVector<std::unique_ptr<EdgedCurve2D>, 2> stratigraphic_line(const Surface2D & surface, const Line2D & line)
```


### stratigraphic_bounding_box

```cpp
public BoundingBox2D stratigraphic_bounding_box()
```


### initialize_stratigraphic_query_trees

```cpp
public void initialize_stratigraphic_query_trees(StratigraphicSectionBuilderKey )
```


### instantiate_stratigraphic_location_on_surfaces

```cpp
public void instantiate_stratigraphic_location_on_surfaces(StratigraphicSectionBuilderKey )
```


### set_stratigraphic_location

```cpp
public void set_stratigraphic_location(const Surface2D & surface, index_t vertex_id, Point1D value, StratigraphicSectionBuilderKey )
```




