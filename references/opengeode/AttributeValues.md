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

# struct AttributeValues


## Members

```cpp
public AttributeType default_value

```

```cpp
public AttributeType no_value

```



## Functions

### AttributeValues

```cpp
public void AttributeValues<AttributeType>()
```


### serialize

```cpp
public void serialize(Archive & serializer)
```




