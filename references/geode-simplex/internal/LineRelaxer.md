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

# class LineRelaxer


## Members

```cpp
public static const auto METRIC_STAMP_NAME

```

```cpp
public static const auto SMOOTH_STAMP_NAME

```

```cpp
public static const auto FIXED_POINTS_NAME

```

```cpp
public static const auto dimension

```



## Records

VertexStamp



## Functions

### LineRelaxer

```cpp
public void LineRelaxer<Model>(const LineRelaxer<Model> & )
```


### LineRelaxer

```cpp
public void LineRelaxer<Model>(LineRelaxer<Model> && )
```


### operator=

```cpp
public LineRelaxer<Model> & operator=(const LineRelaxer<Model> & )
```


### operator=

```cpp
public LineRelaxer<Model> & operator=(LineRelaxer<Model> && )
```


### LineRelaxer

```cpp
public void LineRelaxer<Model>(const Model & model, ModelModifier & modifier, const Line<dimension> & line)
```


### LineRelaxer

```cpp
public void LineRelaxer<Model>(const Model & model, ModelModifier & modifier, const Line<dimension> & line, const Metric<dimension> & metric)
```


### ~LineRelaxer

```cpp
public void ~LineRelaxer<Model>()
```


### relax

```cpp
public void relax()
```




