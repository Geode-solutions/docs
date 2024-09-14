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

# class ScalarFunctionExpliciter3DImpl


## Functions

### add_scalar_isovalues

```cpp
public void add_scalar_isovalues(Span scalar_function_values)
```

### add_one_scalar_isovalue

```cpp
public void add_one_scalar_isovalue(double isovalue)
```

### build_brep

```cpp
public BRep build_brep()
```


### ScalarFunctionExpliciter3DImpl

```cpp
protected void ScalarFunctionExpliciter3DImpl(BackgroundSolid bmesh, basic_string_view scalar_function_name)
```


### ~ScalarFunctionExpliciter3DImpl

```cpp
protected void ~ScalarFunctionExpliciter3DImpl()
```


### inserter

```cpp
protected BackgroundSolidInserter & inserter()
```


### scalar_function_name

```cpp
protected basic_string_view scalar_function_name()
```


### add_inserted_isovalue_to_list

```cpp
protected void add_inserted_isovalue_to_list(double isovalue)
```




