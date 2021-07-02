import { Map as _ol_Map_ } from 'ol';
import { Vector as VectorSource } from 'ol/source';
import { StyleLike } from 'ol/style/Style';
import GeometryType from 'ol/geom/GeometryType';
import { Interaction } from 'ol/interaction';
import { Coordinate } from 'ol/coordinate';
import { Geolocation as _ol_Geolocation } from 'ol';
import { Geometry, LineString, Polygon } from 'ol/geom';

export interface Attributes {
    heading?: boolean;
    accuracy?: boolean;
    altitudeAccuracy?: boolean;
    speed?: boolean;
}

export interface GeolocationDrawOptions {
    source?: VectorSource;
    type?: GeometryType.POINT | GeometryType.LINE_STRING | GeometryType.POLYGON;
    minAccuracy?: number;
    condition?: ((loc: _ol_Geolocation) => boolean);
    attributes?: Attributes;
    tolerance?: number;
    zoom?: number;
    minZoom?: number;
    followTrack?: boolean | 'auto' | 'position' | 'visible';
    style?: StyleLike;
}
/** Interaction to draw on the current geolocation
 *	It combines a draw with a ol_Geolocation
 * @constructor
 * @extends {ol_interaction_Interaction}
 * @fires drawstart, drawend, drawing, tracking, follow
 * @param {any} options
 *  @param { ol.Collection.<ol.Feature> | undefined } option.features Destination collection for the drawn features.
 *  @param { ol.source.Vector | undefined } options.source Destination source for the drawn features.
 *  @param {ol.geom.GeometryType} options.type Drawing type ('Point', 'LineString', 'Polygon'), default LineString.
 *  @param {Number | undefined} options.minAccuracy minimum accuracy underneath a new point will be register (if no condition), default 20
 *  @param {function | undefined} options.condition a function that take a ol_Geolocation object and return a boolean to indicate whether location should be handled or not, default return true if accuracy < minAccuracy
 *  @param {Object} options.attributes a list of attributes to register as Point properties: {accuracy:true,accuracyGeometry:true,heading:true,speed:true}, default none.
 *  @param {Number} options.tolerance tolerance to add a new point (in meter), default 5
 *  @param {Number} options.zoom zoom for tracking, default 16
 *  @param {Number} options.minZoom min zoom for tracking, if zoom is less it will zoom to it, default use zoom option
 *  @param {boolean|auto|position|visible} options.followTrack true if you want the interaction to follow the track on the map, default true
 *  @param { ol.style.Style | Array.<ol.style.Style> | ol.StyleFunction | undefined } options.style Style for sketch features.
 */
export default class GeolocationDraw extends Interaction {
    constructor(options?: GeolocationDrawOptions);


    /** Simplify 3D geometry
  * @param {ol.geom.Geometry} geo
  * @param {number} tolerance
  */
    simplify3D(geo: Geometry, tolerance: number): Polygon | LineString

    /** Simulate a track and override current geolocation
    * @param {Array<ol.coordinate>|boolean} track a list of point or false to stop
    * @param {*} options
    *  @param {number} delay delay in ms, default 1000 (1s)
    *  @param {number} accuracy gps accuracy, default 10
    *  @param {boolean} repeat repeat track, default true
    */
    simulate(track: Coordinate[], options?: {
        delay?: number;
        accuracy?: number;
        repeat?: boolean;
    }): void;
    /**
     * Remove the interaction from its current map, if any,  and attach it to a new
     * map, if any. Pass `null` to just remove the interaction from the current map.
     * @param {Map} map Map.
     * @api stable
     */
    setMap(map: _ol_Map_): void;
    /** Activate or deactivate the interaction.
    * @param {boolean} active
     */
    setActive(active: boolean): void;
    /** Reset drawing
     */
    reset(): void;
    /** Start tracking = setActive(true)
     */
    start(): void;
    /** Stop tracking = setActive(false)
     */
    stop(): void;
    /** Pause drawing
    * @param {boolean} b
     */
    pause(b: boolean): void;
    /** Is paused
    * @return {boolean} b
     */
    isPaused(): boolean;
    /** Enable following the track on the map
    * @param {boolean|auto|position|visible} follow,
    *	false: don't follow,
    *	true: follow (position+zoom),
    *	'position': follow only position,
    *	'auto': start following until user move the map,
    *	'visible': center when position gets out of the visible Extent
     */
    setFollowTrack(follow: boolean | 'auto' | 'position' | 'visible'): void;

    /** Is simulation on ?
  * @returns {boolean}
  */
    simulating(): boolean;
    /** Get a position according to the geolocation
     * @param {Geolocation} loc
     * @returns {Array<any>} an array of measure X,Y,Z,T
     * @api
     */
    getPosition(loc: _ol_Geolocation): number[]
}
