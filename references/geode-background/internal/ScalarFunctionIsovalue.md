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

# struct ScalarFunctionIsovalue


## Members

```cpp
public uuid id

```

```cpp
public shared_ptr scalar_function

```

```cpp
public double isovalue

```



## Functions

### ScalarFunctionIsovalue

```cpp
public void ScalarFunctionIsovalue(const TetrahedralSolid3D & background_solid, basic_string_view function_name, double function_isovalue)
```




