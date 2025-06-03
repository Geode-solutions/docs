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

# class LineCollection


 Collection component describing a Boundary.



```cpp
Inherits from Component<dimension>
```



## Functions

### LineCollection

```cpp
public void LineCollection<>(const LineCollection<> & )
```


### operator=

```cpp
public LineCollection<> & operator=(const LineCollection<> & )
```


### LineCollection

```cpp
public void LineCollection<>(LineCollection<> && other)
```


### ~LineCollection

```cpp
public void ~LineCollection<>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### LineCollection

```cpp
public void LineCollection<>(LineCollectionsKey )
```


### set_line_collection_name

```cpp
public void set_line_collection_name(basic_string_view name, LineCollectionsBuilderKey )
```


### set_line_collection_active

```cpp
public void set_line_collection_active(bool active, LineCollectionsBuilderKey )
```




# class LineCollection


```cpp
Inherits from Component<3U>
```



# class LineCollection


```cpp
Inherits from Component<2U>
```



