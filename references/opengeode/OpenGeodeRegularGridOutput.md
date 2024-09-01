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

# class OpenGeodeRegularGridOutput


```cpp
Inherits from RegularGridOutput<dimension>
```



## Functions

### OpenGeodeRegularGridOutput

```cpp
public void OpenGeodeRegularGridOutput<dimension>(basic_string_view filename)
```


### write

```cpp
public vector write(const RegularGrid<dimension> & mesh)
```




