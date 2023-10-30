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

# class RepairBRepSurfaces


## Records

SegmentTriangleIntersection

DoRepair

DoRepairDuplication

DoRepairIntersection



## Functions

### RepairBRepSurfaces

```cpp
public void RepairBRepSurfaces(BRepRemeshingData & data)
```


### repair

```cpp
public void repair()
```


### ray_intersection

```cpp
public absl::optional<Point3D> ray_intersection(const Surface3D & surface, const TriangulatedSurface3D & input_mesh, const Vector3D & direction, const Point3D & origin)
```


### segment

```cpp
public Segment3D segment(const SurfaceMesh3D & mesh, const PolygonEdge & edge)
```




