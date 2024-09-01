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

# class LightRegularGridOutput


```cpp
Inherits from Output<LightRegularGrid<2U> >
```



# class LightRegularGridOutput


```cpp
Inherits from Output<LightRegularGrid<3U> >
```



# class LightRegularGridOutput


```cpp
Inherits from Output<LightRegularGrid<dimension> >
```



## Functions

### LightRegularGridOutput

```cpp
public void LightRegularGridOutput<dimension>(basic_string_view filename)
```


### write

```cpp
public vector write(const LightRegularGrid<dimension> & grid)
```




