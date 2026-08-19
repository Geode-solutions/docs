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
public void set_stratigraphic_location(const Surface2D & surface, index_t vertex_id, Point1D value)
```


### set_stratigraphic_coordinates

```cpp
public void set_stratigraphic_coordinates(const Surface2D & surface, index_t vertex_id, const StratigraphicPoint2D & value)
```


### import_old_stratigraphic_attribute_values_from_attribute_name

```cpp
public void import_old_stratigraphic_attribute_values_from_attribute_name(std::string_view old_stratigraphic_attribute_name)
```


### import_old_stratigraphic_attribute_values_from_attribute_id

```cpp
public void import_old_stratigraphic_attribute_values_from_attribute_id(const uuid & old_stratigraphic_attribute_id)
```




