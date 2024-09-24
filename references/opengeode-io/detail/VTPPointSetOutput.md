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

# class VTPPointSetOutput


```cpp
Inherits from PointSetOutput<dimension>
```



## Functions

### VTPPointSetOutput

```cpp
public void VTPPointSetOutput<dimension>(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### write

```cpp
public vector write(const PointSet<dimension> & point_set)
```




# class VTPPointSetOutput


```cpp
Inherits from PointSetOutput<3U>
```



# class VTPPointSetOutput


```cpp
Inherits from PointSetOutput<2U>
```



