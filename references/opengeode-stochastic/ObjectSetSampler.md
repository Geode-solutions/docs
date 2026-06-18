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

# class ObjectSetSampler


## Functions

### ObjectSetSampler

```cpp
public void ObjectSetSampler<Type>(const ObjectSetSampler<Type> & )
```


### ObjectSetSampler

```cpp
public void ObjectSetSampler<Type>(ObjectSetSampler<Type> && )
```


### operator=

```cpp
public ObjectSetSampler<Type> & operator=(const ObjectSetSampler<Type> & )
```


### operator=

```cpp
public ObjectSetSampler<Type> & operator=(ObjectSetSampler<Type> && )
```


### ObjectSetSampler

```cpp
public void ObjectSetSampler<Type>()
```


### sample

```cpp
public Type sample(RandomEngine & engine)
```

### change

```cpp
public Type change(const Type & object, RandomEngine & engine)
```

### is_valid_object

```cpp
protected bool is_valid_object(const Type & obj)
```

### ~ObjectSetSampler

```cpp
public void ~ObjectSetSampler<Type>()
```


### log_pdf

```cpp
public double log_pdf(const Type & obj)
```


### set_log_pdf

```cpp
protected void set_log_pdf(double value)
```




