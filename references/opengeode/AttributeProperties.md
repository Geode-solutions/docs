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

# struct AttributeProperties


 Struct holding Attribute flags used by the AttributeManager for updating/computing attribute values



## Members

```cpp
public bool assignable

```

```cpp
public bool interpolable

```

```cpp
public bool transferable

```



## Functions

### AttributeProperties

```cpp
public void AttributeProperties()
```


### AttributeProperties

```cpp
public void AttributeProperties(bool is_assignable, bool is_interpolable)
```


### AttributeProperties

```cpp
public void AttributeProperties(bool is_assignable, bool is_interpolable, bool is_transferable)
```


### serialize

```cpp
public void serialize(Archive & archive)
```




