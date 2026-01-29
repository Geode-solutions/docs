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

# class VTIRegularGridInput


```cpp
Inherits from RegularGridInput<dimension>
```



## Functions

### VTIRegularGridInput

```cpp
public void VTIRegularGridInput<dimension>(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### read

```cpp
public std::unique_ptr<RegularGrid<dimension> > read(const MeshImpl & impl)
```


### is_loadable

```cpp
public Percentage is_loadable()
```


### additional_files

```cpp
public AdditionalFiles additional_files()
```


### object_priority

```cpp
public index_t object_priority()
```




# class VTIRegularGridInput


```cpp
Inherits from RegularGridInput<3U>
```



# class VTIRegularGridInput


```cpp
Inherits from RegularGridInput<2U>
```



