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

# class OpenGeodeRegularGridInput


```cpp
Inherits from RegularGridInput<dimension>
```



## Functions

### OpenGeodeRegularGridInput

```cpp
public void OpenGeodeRegularGridInput<dimension>(basic_string_view filename)
```


### additional_files

```cpp
public typename RegularGridInput<dimension>::AdditionalFiles additional_files()
```


### read

```cpp
public std::unique_ptr<RegularGrid<dimension> > read(const MeshImpl & impl)
```




